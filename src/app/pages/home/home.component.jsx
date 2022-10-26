import Film from "../../components/molecules/film-dropdown/film.component";
import {
  StarDiv,
  StarImg,
  StarLogo,
  Stars,
} from "./home.styles";
import logo from "/Users/thebluehood/Documents/GitHub/star-wars-app/star-wars-app/src/app/assets/svg/logo.svg";

function Home() {
  return (
    <div>
      <StarDiv>
        <Stars className="star"></Stars>
        <Film />
        <StarLogo class="logo">
          <StarImg src={logo} alt="Star Wars Logo" />
        </StarLogo>
      </StarDiv>
    </div>
  );
}

export default Home;
