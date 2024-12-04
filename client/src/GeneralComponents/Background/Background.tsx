import styles from "./Background.module.css";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({
  children,
}: BackgroundProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.shadow}>{children}</div>
    </div>
  );
};

export default Background;
