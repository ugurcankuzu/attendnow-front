import { useJwtContext } from "@/store/jwtContext";
import TSession from "@/types/sessionType";
import convertTimetoReadable from "@/util/convertTimetoReadable";
import getSessionHistory from "@/util/getSessionHistory";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from "react";

interface ISessionListCardComponent {
  courseId: string;
  setSelectedSession: Dispatch<SetStateAction<TSession>>;
}
export default function SessionListCard({
  courseId,
  setSelectedSession,
}: ISessionListCardComponent) {
  const jwtContext = useJwtContext();
  const [sessions, setSessions] = useState<TSession[]>([]);

  useEffect(() => {
    getSessionHistory(courseId, jwtContext.jwtToken).then((sessions) =>
      setSessions(sessions)
    );
  }, [courseId]);
  return (
    <div className={SessionListCardStyles.cardWrapper}>
      <h2 className={SessionListCardStyles.cardTitle}>Sessions</h2>
      {sessions.length > 0 &&
        sessions.map((session, index) => (
          <div
            key={index}
            className={SessionListCardStyles.items}
            onClick={() => setSelectedSession(session)}
          >
            <p className={SessionListCardStyles.courseName}>
              {session.course.courseName}
            </p>
            <p className={SessionListCardStyles.date}>
              {convertTimetoReadable(session.date)}
            </p>
          </div>
        ))}
    </div>
  );
}

const SessionListCardStyles = {
  cardWrapper:
    "col-span-3 row-span-6 bg-white row-start-2 col-start-3 overflow-y-scroll p-4 rounded-md shadow flex flex-col items-center gap-4",
  cardTitle: "self-start text-sky-magenta text-2xl",
  items:
    "flex flex-1 transition-bg duration-[.25s] hover:bg-slate-300/30 hover:cursor-pointer px-2 py-1",
  courseName: "line-clamp-1",
  date: "text-sm text-black/30",
};
