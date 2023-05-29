import parse from "html-react-parser";
import { useGetData } from "../hooks";
import "./style.scss";

export default function Footer() {
  const Info = useGetData(["inform"], "information");

  console.log(Info?.data, "fffffoooooooooooo");

  return (
    <>
      <div className="google_map">
        {parse(`${Info?.data?.data[0].addressMap}`) }
      </div>
      <div className="footer">
        <div className="icons">
          <li>
            <a href={Info?.data?.data[0].email}>
              <i class="fa-regular fa-at"></i>
            </a>
          </li>
          <li>
            <a href={Info?.data?.data[0].instagram}>
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href={Info?.data?.data[0].telegram}>
              <i class="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li>
            <a href={"tel: " + Info?.data?.data[0].phone[1]}>
              <i class="fa-solid fa-phone"></i>
            </a>
          </li>
        </div>
        <div className="ulla">
          <ul>
            <li>
              <a href="#">
                {" "}
                <h2>About</h2>
              </a>
            </li>
            <li>
              <a href="#"> lorem </a>
            </li>
            <li>
              <a href="#"> ipsum</a>
            </li>
            <li>
              <a href="#">dolor</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <h2> Contact</h2>
              </a>
            </li>
            <li>
              <a href="#"> lorem </a>
            </li>
            <li>
              <a href="#"> ipsum</a>
            </li>
            <li>
              <a href="#">dolor</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                {" "}
                <h2>Shop</h2>
              </a>
            </li>
            <li>
              <a href="#"> lorem </a>
            </li>
            <li>
              <a href="#"> ipsum</a>
            </li>
            <li>
              <a href="#">dolor</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
