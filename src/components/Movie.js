import React from "react";
import image from "../assets/img/poster.jpg"

const Movie = () => {
  return (
    <li className="movie-container">
       
        <img src={image} alt="" className="img" />

        <div className="content">
            <h3>Title</h3>
            <span>date</span>
            <h3>note</h3>
            <div className="tag-container">tag</div>

            <h3>synopsis</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia earum,
                eaque, perferendis voluptatem fugit ea vel blanditiis libero corporis
                esse tempora nesciunt illo similique aspernatur itaque dolores harum
                dolorum illum.orem ipsum, dolor sit amet consectetur adipisicing elit. Quia earum,
                eaque, perferendis voluptatem fugit ea vel blanditiis libero corporis
                esse tempora nesciunt illo similique aspernatur itaque dolores harum
                dolorum illum.orem ipsum, dolor sit amet consectetur adipisicing elit. Quia earum,
                eaque, perferendis voluptatem fugit ea vel blanditiis libero corporis
                esse tempora nesciunt illo similique aspernatur itaque dolores harum
                dolorum illum.
            </p>
            <button id="btn-fav">Ajouter au coup de coeur</button>
        </div>
      
    </li>
  );
};

export default Movie;
