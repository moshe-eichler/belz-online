import React from "react";
import styles from '../styles/Home.module.css';

// // reactstrap components
// import {
//   CardColumns,
//   Card,
//   CardBody,
//   CardImg,
//   CardTitle,
//   CardText,
// } from "reactstrap";

// function Example() {
//   return (
//     <>
//       <CardColumns>
//         <Card className={styles.card}>
//           <CardImg
//             alt="..."
//             // src={require("assets/img/theme/img-1-1000x600.jpg")}
//             top
//           ></CardImg>
//           <CardBody>
//             <CardTitle>Card title that wraps to a new line</CardTitle>
//             <CardText>
//               This is a longer card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </CardText>
//           </CardBody>
//         </Card>
//         <Card className={`p-3 ${styles.card}`}>
//           <CardBody className="blockquote mb-0">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//               posuere erat a ante.
//             </p>
//             <footer className="blockquote-footer">
//               <small className="text-muted">
//                 Someone famous in <cite title="Source Title">Source Title</cite>
//               </small>
//             </footer>
//           </CardBody>
//         </Card>
//         <Card>
//           <CardImg
//             alt="..."
//             // src={require("assets/img/theme/img-1-1000x600.jpg")}
//             top
//           ></CardImg>
//           <CardBody>
//             <CardTitle>Card title</CardTitle>
//             <CardText>
//               This card has supporting text below as a natural lead-in to
//               additional content.
//             </CardText>
//             <CardText>
//               <small className="text-muted">עדכון אחרון לפני 3 חודשים</small>
//             </CardText>
//           </CardBody>
//         </Card>
//         <Card className="bg-primary text-white text-center p-3">
//           <blockquote className="blockquote mb-0">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//               posuere erat.
//             </p>
//             <footer className="blockquote-footer">
//               <small>
//                 Someone famous in <cite title="Source Title">Source Title</cite>
//               </small>
//             </footer>
//           </blockquote>
//         </Card>
//         <Card className="text-center">
//           <CardBody>
//             <CardTitle>Card title</CardTitle>
//             <CardText>
//               This card has a regular title and short paragraphy of text below
//               it.
//             </CardText>
//             <CardText>
//               <small className="text-muted">עדכון אחרון לפני 3 חודשים</small>
//             </CardText>
//           </CardBody>
//         </Card>
//         <Card>
//           <CardImg
//             alt="..."
//             // src={require("assets/img/theme/img-1-1000x600.jpg")}
//           ></CardImg>
//         </Card>
//         <Card className="p-3 text-right">
//           <blockquote className="blockquote mb-0">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//               posuere erat a ante.
//             </p>
//             <footer className="blockquote-footer">
//               <small className="text-muted">
//                 Someone famous in <cite title="Source Title">Source Title</cite>
//               </small>
//             </footer>
//           </blockquote>
//         </Card>
//         <Card>
//           <CardBody>
//             <CardTitle>Card title</CardTitle>
//             <CardText>
//               This is another card with title and supporting text below. This
//               card has some additional content to make it slightly taller
//               overall.
//             </CardText>
//             <CardText>
//               <small className="text-muted">עדכון אחרון לפני 3 חודשים</small>
//             </CardText>
//           </CardBody>
//         </Card>
//       </CardColumns>
//     </>
//   );
// }

// export default Example;
// import React from "react";
// import 'bootstrap-css-only/css/bootstrap.min.css';

// reactstrap components
import {
  CardDeck,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardGroup,
} from "reactstrap";

function Example() {
    return (
      <>
        <CardDeck style={{display: 'flex', flexDirection: 'row', width: "60%", margin: "0 auto"}}>
          <Card style={{flex: 1, margin: "20px", textAlign:"center"}}>
            <CardBody className='bg-light'>
              <CardTitle>הר״ר משה יוסף אייכלר</CardTitle>
              <CardText>
                פתח תקוה 9 <br />
                ירושלים - ישראל <br />
                פלאפון 0548597760 <br />
                טלפון 0548597740 <br />
                בן: הר״ר מאיר אייכלר <br />
                חתן: הר״ר נפתלי ניימן <br />
              </CardText>
              <CardText>
                <small className="text-muted">עדכון אחרון לפני 3 חודשים</small>
              </CardText>
            </CardBody>
          </Card>
          <Card style={{flex: 1, margin: "20px", textAlign:"center"}}>
            <CardBody className='bg-light'>
              <CardTitle>הר״ר מאיר אייכלר</CardTitle>
              <CardText>
                שמגר 12 <br />
                ירושלים - ישראל <br />
                פלאפון 0527115775 <br />
                טלפון 0527740642 <br />
                בן: הר״ר מאיר אייכלר <br />
                חתן: הר״ר נפתלי ניימן <br />
              </CardText>
              <CardText>
                <small className="text-muted">עדכון אחרון לפני 3 חודשים</small>
              </CardText>
            </CardBody>
          </Card>
          <Card style={{flex: 1, margin: "20px", textAlign:"center"}}>
            <CardBody className='bg-light'>
              <CardTitle>Card title</CardTitle>
              <CardText>
                אמרי חיים 50 <br />
                ירושלים - ישראל <br />
                פלאפון 0533111034 <br />
                טלפון 0533111035 <br />
                בן: הר״ר מאיר אייכלר <br />
                חתן: הר״ר נפתלי ניימן <br />
              </CardText>
              <CardText>
                <small className="text-muted">עדכון אחרון לפני 3 חודשים</small>
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </>
    );
}

export default Example;
