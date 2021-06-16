import React from "react";
import './index.css';
import Btn from './UI/Buttons/Btn';
import IcBtn from './UI/Buttons/IcBtn';
import Inp from './UI/Input/Inp';
import IcInp from "./UI/Input/IcInp";
const App = () => {
    return (
        <div className="container mx-auto font-sans space-y-3 ">
          <Btn btnSize="xs" btnText="Primary" btnType="primary"/>
          <Btn btnSize="sm" btnText="Primary" btnType="primary"/>
          <Btn btnSize="base" btnText="Primary" btnType="primary"/>
          <Btn btnSize="xl" btnText="Primary" btnType="primary"/>
          <br />
          <Btn btnSize="xs" btnText="Primary" btnType="danger"/>
          <Btn btnSize="sm" btnText="Primary" btnType="danger"/>
          <Btn btnSize="base" btnText="Primary" btnType="danger"/>
          <Btn btnSize="xl" btnText="Primary" btnType="danger"/>
          <br />
          <Btn btnSize="xs" btnText="Primary" btnType="warning"/>
          <Btn btnSize="sm" btnText="Primary" btnType="warning"/>
          <Btn btnSize="base" btnText="Primary" btnType="warning"/>
          <Btn btnSize="xl" btnText="Primary" btnType="warning"/>
          <br />
          <Btn btnSize="xs" btnText="Primary" btnType="success"/>
          <Btn btnSize="sm" btnText="Primary" btnType="success"/>
          <Btn btnSize="base" btnText="Primary" btnType="success"/>
          <Btn btnSize="xl" btnText="Primary" btnType="success"/>
          <br />
          <IcBtn btnSize="xs" btnText="Primary" btnType="primary" />
          <IcBtn btnSize="sm" btnText="Primary" btnType="primary" />
          <IcBtn btnSize="base" btnText="Primary" btnType="primary" />
          <IcBtn btnSize="xl" btnText="Primary" btnType="primary" />
          
          <IcBtn btnSize="xs" btnText="Primary" btnType="danger" />
          <IcBtn btnSize="sm" btnText="Primary" btnType="danger" />
          <IcBtn btnSize="base" btnText="Primary" btnType="danger" />
          <IcBtn btnSize="xl" btnText="Primary" btnType="danger" />

          <IcBtn btnSize="xs" btnText="Primary" btnType="warning" />
          <IcBtn btnSize="sm" btnText="Primary" btnType="warning" />
          <IcBtn btnSize="base" btnText="Primary" btnType="warning" />
          <IcBtn btnSize="xl" btnText="Primary" btnType="warning" />

          <IcBtn btnSize="xs" btnText="Primary" btnType="success" />
          <IcBtn btnSize="sm" btnText="Primary" btnType="success" />
          <IcBtn btnSize="base" btnText="Primary" btnType="success" />
          <IcBtn btnSize="xl" btnText="Primary" btnType="success" />

          <Inp inpType="text" inpPlaceholder="Text Placeholder"/>
          <Inp inpType="number" inpPlaceholder="Number Placeholder"/>
          <IcInp inpType="text" inpPlaceholder="Text Placeholder"/>
          <IcInp inpType="number" inpPlaceholder="Number Placeholder"/>
          <br />
          </div>
        
    )
}
export default App;