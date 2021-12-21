import React from "react";
import { Typography, Row, Col, Radio, Button } from "antd";
import { useParams } from "react-router-dom";
import { API_URL } from "../App";

const { Title } = Typography;

export default function Questionary(props) {
  const [answers, setAnswers] = React.useState([0, 0, 0, 0, 0]);
  let { clientID } = useParams();
  const company = props.company;

  const onChange = (index, e) => {
    console.log("radio checked", e.target.value);
    console.log("index", index);
    setAnswers((answers) => {
      let tmp = [...answers];
      tmp[index] = e.target.value;
      return tmp;
    });
  };

  const questionList_part1 = [
    "Comment évalueriez-vous la qualité de notre échange (écoute, identification de votre besoin, empathie, sourire etc.) ?",
    "Comment trouvez-vous la qualité des réponses apportées ? ",
    "Êtes-vous satisfait des réponses obtenues ?",
    "Est-ce-que vous recommandez notre cabinet comptable à l'un de vos proches ?",
    "Avez-vous des remarques particulières à nous faire parvenir ? N'hésitez pas à nous faire part de vos idées",
  ];

  const handleSubmit = () => {
    
    
    const data= {
      clientID,
      company,
      answers
    }

    // Edit endpoint here -------------------<<<<<<<<<<<<<<<<<<<<<<<<<|||||<<<<<||||<<<
    fetch(API_URL+"/formualre", {
      method:"POST",
      headers:{'accept':"application/json", 'authorisation':"Bearer "},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>{

    })
    .catch(err=>{
      alert("Une erreur s'est produit")
      console.log(err)
    })
  }
  

  return (
    <div style={{ padding: "3em" }}>
      <Title level={2}>Questionaire satisfaction client</Title>
      {company === "cdi" ? (
        <img
          style={{
            maxHeight: 60,
            position: "absolute",
            top: 33,
            right: 200,
          }}
          src="/Cabinet-des-Independants-3-.png"
          alt="CDI"
        />
      ) : (
        <img
          style={{
            maxHeight: 60,
            position: "absolute",
            top: 33,
            right: 200,
          }}
          src="/lososite-BVTC-01-min.png"
          alt="BVTC"
        />
      )}

      <br />

      <hr />

      <Title level={3}>
        Le formulaire de satisfaction pour mesurer la qualité de nos RDV
      </Title>
      <br />
      <Row>
        <Col span={12}></Col>
        <Col
          span={12}
          style={{
            marginLeft: "-21px",
          }}
        >
          <span className="span-q">excellent</span>
          <span className="span-q">Satisfait</span>
          <span className="span-q">A améliorer</span>
          <span className="span-q">Insuffisant</span>
          <span className="span-q">Mauvais</span>
        </Col>
        <br />
        <br />

        {questionList_part1.map((qst, index) => (
          <>
            <Col span={12}>
              <p>{qst}</p>
            </Col>
            <Col span={12}>
              <Radio.Group
                onChange={onChange.bind(this, index)}
                value={answers[index]}
              >
                <Radio value={1}></Radio>
                <Radio value={2}></Radio>
                <Radio value={3}></Radio>
                <Radio value={4}></Radio>
                <Radio value={5}></Radio>
              </Radio.Group>
            </Col>
          </>
        ))}
      </Row>
      <br />

      <br />
      <Button type="primary" size="large" onClick={handleSubmit}>
        Envoyer
      </Button>
    </div>
  );
}
