import React from "react";
import "./Form1.scss"
import { Link } from "../../../node_modules/react-router-dom/dist/index";


/*  FIREBASE  */

import { initializeApp } from "firebase/app";
import { getAuth, 

} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDsX2DYBMGmRAudDb6olsN-xt6H9YZjyYA",
  authDomain: "registerationcardguard.firebaseapp.com",
  projectId: "registerationcardguard",
  storageBucket: "registerationcardguard.appspot.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)


// /* END OF FIREBASE*/

export const Form1 = () => {
  return (
    <div className="RegistrationForm">
      <div className="inner-RegistrationForm">
      </div>
      <form className="RegistrationForm-form">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, iure
        dolorum quae error ducimus reiciendis. Ab voluptate dolorum laborum a
        delectus eligendi, laboriosam eius sint nostrum architecto repudiandae
        exercitationem consequatur ratione dicta quam cumque repellat mollitia
        quis animi? Ad itaque quidem maiores numquam voluptatum, aperiam ducimus
        aut sint dolor? Sunt eum voluptatum cum facere eligendi consequuntur,
        quam non, culpa ipsum qui repellendus soluta reprehenderit praesentium
        adipisci suscipit blanditiis laboriosam recusandae nostrum iusto
        obcaecati accusamus? Enim sit, obcaecati fugiat adipisci veniam
        cupiditate eos consequatur eligendi ratione ullam voluptas assumenda
        neque? Consectetur nemo libero aspernatur repellat beatae, sunt dolorum
        sequi deserunt, laudantium in excepturi quidem explicabo! Eius at quis
        tempore. Blanditiis architecto ratione iusto vero quis numquam debitis
        quidem, iste repudiandae consequuntur ducimus. Iusto ut nobis laboriosam
        reprehenderit officia! Dolor tempore doloremque ducimus ullam earum,
        nisi dolores odio porro ipsum tempora corrupti amet illum accusamus
        aliquam, quo architecto, harum recusandae saepe inventore. Itaque
        laboriosam, id in mollitia error sunt iusto unde rem expedita eaque
        dicta nam sed pariatur excepturi beatae porro molestias sequi saepe
        optio! Sunt dicta, ipsum facilis et illum, placeat officiis itaque
        magnam assumenda porro culpa aliquid, veniam dolor reiciendis temporibus
        fugit debitis nisi ea unde sint. Illo, reprehenderit blanditiis!
        <Link to="form/d2">next</Link>
      </form>
    </div>
  );
};
