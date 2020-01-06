import React from 'react';
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import './Portfolio.css';
import endemicPic from '../../assets/images/endemicDoctor.gif';
import ffPic from '../../assets/images/friendFinder.png';
import bamazonPic from '../../assets/images/bamazon.png';
import liriPic from '../../assets/images/liri.png';
import rpsPic from '../../assets/images/rpsMultiplayer.jpg';
import triviaPic from '../../assets/images/triviaGame.jpg';
import starWarsPic from '../../assets/images/starWarsRPG.jpeg';
import hangmanPic from '../../assets/images/hangman.png';

export const Portfolio = () => {
	return (
		<div class="componentContainer">
			<Header text="Portfolio" />
			<Divider />

			<div className="portfolioContainer">
			<div class="grid">
      <ul id="hexGrid">
				
			<li class="hex">
          <div class="hexIn">
            <a class="hexLink" target="blank" href="https://endemic-game-release.herokuapp.com/">
              <img class='img' src={endemicPic} alt="Endemic" />
              <h1 class="hexTitle">Endemic</h1>
              <p class="hexText">Save the world from an endemic spread of diseases.</p>
            </a>
          </div>
        </li>

				<li class="hex">
          <div class="hexIn">
            <a class="hexLink" target="blank" href="https://avinashsinghdhillon.github.io/TriviaGame/">
              <img class='img' src={triviaPic} alt="Trivia" />
              <h1 class="hexTitle">Trivia</h1>
              <p class="hexText">Challenge yourself in a trivia game.</p>
            </a>
          </div>
        </li>

				<li class="hex">
          <div class="hexIn">
            <a class="hexLink" target="blank" href="https://avinashsinghdhillon.github.io/GifTastic/">
              <img class='img' src="https://media3.giphy.com/media/l0NwGpoOVLTAyUJSo/200.gif?cid=c3ddf1855d3cb7035079636f6be6e26f&rid=200.gif" alt="GifTastic" />
              <h1 class="hexTitle">GifTastic</h1>
              <p class="hexText">Explore the gifs you want to here.</p>
            </a>
          </div>
        </li>

        <li class="hex">
          <div class="hexIn">
            <a class="hexLink" target="blank" href="https://avinashsinghdhillon.github.io/unit-4-game/">
              <img class='img' src={starWarsPic}  alt="Star Wars" />
              <h1 class="hexTitle">Star Wars</h1>
              <p class="hexText">Star Wars role playing game.</p>
            </a>
          </div>
        </li>

        <li class="hex">
          <div class="hexIn">
            <a class="hexLink" target="blank" href="https://github.com/avinashsinghdhillon/liri-node-app">
              <img class='img' src={liriPic} alt="LIRI" />
              <h1 class="hexTitle">LIRI App</h1>
              <p class="hexText">Search movies, artists and songs.</p>
            </a>
          </div>
        </li>

				<li class="hex">
          <div class="hexIn">
            <a class="hexLink" target="blank" href="https://avinashsinghdhillon.github.io/Word-Guess-Game/">
              <img class='img' src={hangmanPic} alt="Hangman" />
              <h1 class="hexTitle">Hangman</h1>
              <p class="hexText">Guess the movie to win the game.</p>
            </a>
          </div>
        </li>

        <li class="hex">
          <div class="hexIn">
            <a class="hexLink" target="blank" href="https://github.com/avinashsinghdhillon/Bamazon">
              <img class='img' src={bamazonPic} alt="Bamazon" />
              <h1 class="hexTitle">Bamazon</h1>
              <p class="hexText">Store sales and management app.</p>
            </a>
          </div>
        </li>

        <li class="hex">
          <div class="hexIn">
            <a class="hexLink" target="blank" href="https://fast-plateau-29095.herokuapp.com">
              <img class='img' src={ffPic} alt="FF" />
              <h1 class="hexTitle">Friend Finder</h1>
              <p class="hexText">Answer a brief survey to find your match.</p>
            </a>
          </div>
        </li>

				<li class="hex">
          <div class="hexIn">
            <a class="hexLink" target="blank" href="https://avinashsinghdhillon.github.io/RPS-Multiplayer/">
              <img class='img' src={rpsPic} alt="RPS"/>
              <h1 class="hexTitle">RPS-Multiplayer</h1>
              <p class="hexText">Play Rock Paper Scissors with your friends.</p>
            </a>
          </div>
        </li>

      </ul>
    </div>
			</div>

		</div>
	)
}

export default Portfolio;