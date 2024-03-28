interface IActiveSessionsCardComponent {
  sessionId: string;
}
export default function ActiveSessionsCard({
  sessionId,
}: IActiveSessionsCardComponent) {
  return (
    <div className={ActiveSessionsCardStyles.cardWrapper}>
      <div className={ActiveSessionsCardStyles.titleSection}>
        <h2 className={ActiveSessionsCardStyles.title}>Active Session</h2>
      </div>
      {/**Aşağıdaki dive qr kodu gelecek */}
      <div className={ActiveSessionsCardStyles.contentSection}>
        {sessionId ? null : (
          <p className={ActiveSessionsCardStyles.contentNotFound}>
            We haven't find any active session at the moment.
          </p>
        )}
      </div>
    </div>
  );
}

const ActiveSessionsCardStyles = {
  cardWrapper:
    "col-span-2 row-span-2 bg-white col-start-1 rounded-md shadow px-2 py-2 flex flex-col gap-4",
  titleSection: "",
  title: "text-lg text-sky-magenta",
  contentSection: "text-center flex flex-1 justify-center items-center",
  contentNotFound: "text-black/30 text-sm",
};
