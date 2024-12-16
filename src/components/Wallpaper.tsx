import "../styles/index.css";
import wallpaper from "../assets/cypher-valorant-pc-games-2021-3840x2160-5536.png"

export function Wallpaper() {
  return <section className="wallpaper" style={{ backgroundImage: `url(${wallpaper})` }}></section>;
}
