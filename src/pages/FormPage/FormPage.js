import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { v4 as uuidv4 } from "uuid";
import "./FormPage.css";
import useCurrentAd from "../../hooks/useCurrentAd";

function FormPage() {
  const adData = {
    id: uuidv4(),
    heading: "",
    description: "",
    image: "",
  };

  const { currentProduct, currentAd } = useSelector((store) => store);
  const { deleteCurrentAd } = useCurrentAd();
  let navigate = useNavigate();
  const { createAd, updateAd } = useProducts();
  const [ad, setAd] = useState(currentAd.id ? currentAd : adData);
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();

    currentAd.id
      ? updateAd(ad, currentProduct.id)
      : createAd(ad, currentProduct.id);

    navigate(-1);
    deleteCurrentAd();
  };

  const onChange = (event) => {
    setAd({
      ...ad,
      [event.target.id]: event.target.value,
    });

    if (ad.heading !== "" && ad.description !== "") {
      setIsDisabled(false);
    }
  };

  const onReset = () => {
    currentAd.id ? setAd(currentAd) : setAd(adData);
    currentAd.id ? setIsDisabled(false) : setIsDisabled(true);
  };

  return (
    <main className="read-container">
      <h2 className="title">
        {currentAd.id
          ? `EDITING ${currentAd.heading} AD`
          : `CREATE NEW AD FOR ${currentProduct.productName}`}
      </h2>

      <form className="form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="heading">Heading</label>
        <input
          placeholder="Insert here your heading"
          type="text"
          id="heading"
          value={ad.heading}
          onChange={onChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          placeholder="What is your ad about? Max 120 char"
          maxLength="120"
          id="description"
          value={ad.description}
          onChange={onChange}
        />
        <label className="form__image" htmlFor="image">
          {ad.image === "" ? "Load your image here" : "Image uploaded"}
        </label>
        <input
          type="file"
          onChange={onChange}
          accept="image/png, image/jpeg"
          id="image"
        />

        <div className="form__box">
          <button className="reset" type="button" onClick={() => onReset()}>
            Reset
          </button>
          <button className="submit" disabled={isDisabled} type="submit">
            {currentAd.id ? "Save changes" : "Submit"}
          </button>
        </div>
      </form>
    </main>
  );
}

export default FormPage;
