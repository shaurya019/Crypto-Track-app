import React,{ useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../CoinsTable";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
}));


const Carousel = () => {
  const classes = useStyles();
  return (
    <div className={classes.carousel}>
      <h1>Carousel</h1>
    </div>
  )
}

export default Carousel
