import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div>
        <nav className={`${styles.nav} container`}>
            <div className="logo">
                <img src="/Images/banner-3.png" alt="Logo" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
        </nav>
    </div>
  );
};

export default Navigation;