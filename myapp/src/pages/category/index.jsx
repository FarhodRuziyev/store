import { useGetData } from "../../components/hooks";
import { Card, Col, Row, Button, Text, Link } from "@nextui-org/react";

// export default function Category() {
//   const category = useGetData(["categoryget"], "category");
//   console.log(category?.data?.data, "cccccccccccccccccccccccc");

//   return (
//     <div className="category">
//       {category?.data?.data?.map((item, index) => (
//         <Link to={`/products/${item?.id}`} key={index}>
//           <Card css={{ w: "300px", h: "300px", margin: "15px" }}>
//             <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
//               <Col>
//                 <Text
//                   size={12}
//                   weight="bold"
//                   transform="uppercase"
//                   color="#ffffffAA"
//                 >
//                   {item?.name_Uz}
//                 </Text>
//                 <Text h3 color="black">
//                   Acme camera
//                 </Text>
//               </Col>
//             </Card.Header>
//             <Card.Body css={{ p: 0 }}>
//               <Card.Image
//                 src={"http://3.138.204.20/upload/" + item?.photo?.path}
//                 width="100%"
//                 height="200px"
//                 // objectFit="cover"
//                 alt="Card example background"
//               />
//             </Card.Body>
//             <Card.Footer
//               isBlurred
//               css={{
//                 position: "absolute",
//                 bgBlur: "#ffffff66",
//                 borderTop:
//                   "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
//                 bottom: 0,
//                 zIndex: 1,
//               }}
//             >
//               <Row>
//                 <Col>
//                   <Text color="#000" size={12}>
//                     Available soon.
//                   </Text>
//                   <Text color="#000" size={12}>
//                     Get notified.
//                   </Text>
//                 </Col>
//                 <Col>
//                   <Row justify="flex-end">
//                     <Button flat auto rounded color="secondary">
//                       <Text
//                         css={{ color: "inherit" }}
//                         size={12}
//                         weight="bold"
//                         transform="uppercase"
//                       >
//                         Notify Me
//                       </Text>
//                     </Button>
//                   </Row>
//                 </Col>
//               </Row>
//             </Card.Footer>
//           </Card>
//         </Link>
//       ))}
//     </div>
//   );
// }
