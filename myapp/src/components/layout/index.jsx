import { Link } from "react-router-dom";
import { useGetData } from "../../components/hooks";
import { Navbar, Button, Text } from "@nextui-org/react";
import { AcmeLogo } from "../acmelogo/index";
import { useContext } from "react";
import { ModeContext } from "../state";
import Footer from "../footer";
import "./layout.scss";

export default function Layout({ children }) {
  const { mode, setMode } = useContext(ModeContext);
  const Categ = useGetData(["Data"], "/category");
  console.log(Categ?.data, "categggggggggggggggggg");
  return (
    <>
      <div>
        <Navbar isBordered variant="sticky">
          <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" />
            <AcmeLogo />
            <Text
              css={{ color: "Navy" }}
              className={mode ? " " : "light"}
              b
              color="inherit"
              hideIn="xs"
            >
              ACME
            </Text>
          </Navbar.Brand>
          <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
            <Link className={mode ? " " : "light"} to={"/"}>
              Home
            </Link>
            <Link className={mode ? " " : "light"} to={"/about"}>
              About
            </Link>
            <Link className={mode ? " " : "light"} to={"/message"}>
              Message
            </Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Item>
              <Button
                auto
                flat
                onClick={() => setMode(!mode)}
                css={
                  mode
                    ? { backgroundColor: "Navy", color: "White" }
                    : { backgroundColor: "White", color: "Navy" }
                }
                href="#"
              >
                {mode ? (
                  <i class="fa-solid fa-moon"></i>
                ) : (
                  <i class="fa-solid fa-sun"></i>
                )}
              </Button>
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Collapse
            css={{
              backgroundColor: "White",
              width: "250px",
              backgroundColor: "$blue00",
            }}
          >
            {Categ?.data?.data.map((item, index) => (
              <Navbar.CollapseItem
                key={index}
                css={{ backgroundColor: "$green0", height: "100%" }}
              >
                <Link
                  to={`/products/category/${item?.id}`}
                  color="inherit"
                  style={{
                    minWidth: "100%",
                    margin: " 0 auto",
                    paddingLeft: "4%",
                    border: "0.1px solid green",
                  }}
                >
                  {item?.name_Uz}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
        {children}
        <Footer />
      </div>
    </>
  );
}
