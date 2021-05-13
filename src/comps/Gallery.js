import React, { useState, useEffect, useContext } from "react";
import { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import Modal from "./Modal";
import Hero from "./Hero";
import Logout from "./Logout";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (!user) {
      setredirect("/");
    }
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Fragment>
      <Hero />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      <Logout />
    </Fragment>
  );
}
