import React, { useState, useEffect } from "react";

import HeaderBar from "../components/HeaderBar/HeaderBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Accordion from "../components/Accordion/Accordion";
import Loading from "../components/Loading/Loading";

import { Link } from "react-router-dom";
import axios from "axios";

import Grid from "@material-ui/core/Grid";

export default function Products() {
  const [faq, setFaq] = useState([]);
  const [filteredFaq, setFilteredFaq] = useState([]);
  const [firstButtonFilter, setFirstButtonFilter] = useState("btn filter-btn");
  const [secondButtonFilter, setSecondButtonFilter] = useState(
    "btn filter-btn"
  );
  const [thirdButtonFilter, setThirdButtonFilter] = useState("btn filter-btn");
  const [fourthButtonFilter, setFourthButtonFilter] = useState(
    "btn filter-btn"
  );
  const [active, setActive] = useState("");
  const [isLoading, setLoading] = useState(true);

  let loading = <div></div>;

  useEffect(() => {
    const endpoint = "/faq";

    axios
      .get(endpoint)
      .then((response) => {
        // if (response.status === 200) {
        if (response.data.status) {
          console.log(response.data.data);
          let respFaq = [];

          response.data.data.map((resp) => {
            faq.push({
              category: resp.category,
              question: resp.question,
              answer: resp.answer,
              id: resp.id,
            });
          });

          //setFaq(respFaq);
          console.log(faq);

          response.data.data.map((resp) => {
            if (resp.category === "1") {
              filteredFaq.push({
                category: resp.category,
                question: resp.question,
                answer: resp.answer,
                id: resp.id,
              });
            }
          });
          showFirstCategory();
          console.log(filteredFaq);
          setLoading(false);
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function showFirstCategory() {
    setFilteredFaq(faq.filter((e) => e.category === "1"));
    setFirstButtonFilter("btn filter-btn filter-btn-active");
    setSecondButtonFilter("btn filter-btn");
    setThirdButtonFilter("btn filter-btn");
    setFourthButtonFilter("btn filter-btn");
  }

  function showSecondCategory() {
    setFilteredFaq(faq.filter((e) => e.category === "2"));
    setFirstButtonFilter("btn filter-btn");
    setSecondButtonFilter("btn filter-btn filter-btn-active");
    setThirdButtonFilter("btn filter-btn");
    setFourthButtonFilter("btn filter-btn");
  }

  function showThirdCategory() {
    setFilteredFaq(faq.filter((e) => e.category === "3"));
    setFirstButtonFilter("btn filter-btn");
    setSecondButtonFilter("btn filter-btn");
    setThirdButtonFilter("btn filter-btn filter-btn-active");
    setFourthButtonFilter("btn filter-btn");
  }

  function showFourthCategory() {
    setFilteredFaq(faq.filter((e) => e.category === "4"));
    setFirstButtonFilter("btn filter-btn");
    setSecondButtonFilter("btn filter-btn");
    setThirdButtonFilter("btn filter-btn");
    setFourthButtonFilter("btn filter-btn filter-btn-active");
  }

  if (isLoading) {
    loading = <Loading />;
  }

  return (
    <div id="main">
      <HeaderBar />
      <Header />
      <div id="content" className="width--large">
        <div className="text--center mb-4">
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <button
                className={firstButtonFilter}
                onClick={() => showFirstCategory()}
              >
                Loakarya
              </button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <button
                className={secondButtonFilter}
                onClick={() => showSecondCategory()}
              >
                Produk
              </button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <button
                className={thirdButtonFilter}
                onClick={() => showThirdCategory()}
              >
                Layanan
              </button>
            </Grid>
            <Grid item xs={6} sm={3}>
              <button
                className={fourthButtonFilter}
                onClick={() => showFourthCategory()}
              >
                Pemesanan
              </button>
            </Grid>
          </Grid>
        </div>

        {loading}

        {filteredFaq &&
          filteredFaq.map((faq) => (
            <Accordion
              id={faq.id}
              top={faq.question}
              bottom={faq.answer}
              active={active}
              setActive={setActive}
            />
          ))}

        {/* <Accordion
                    top="Im ten feet tall"
                    bottom="Been tryin so hard not to let it show but you got me feelin like im blblblblbl We are one one for show All my life ive been ive been waitin for somone like u yeaah ive been looking for someone like uyeh u make me"
                /> */}
      </div>
      <Footer />
    </div>
  );
}
