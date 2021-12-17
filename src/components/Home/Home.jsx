import "./Home.css"
import Banner from "../Banner/Banner"
import {useStyletron} from 'baseui';

function Home() {
    const [css, theme] = useStyletron();

    return (
        <div className="home">
            <Banner />
            <a href="/robdog" className={css({
                fontSize: '30px',
                color: theme.colors.primary,
            })}
            >
                Home Content
            </a>
        </div>
    )
}


export default Home;