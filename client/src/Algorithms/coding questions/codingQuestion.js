import React from 'react';
import {Paper,Grid,Typography} from '@material-ui/core';
import './algoCard.css';
import { NavLink } from 'react-router-dom';
export default function codingQuestion(props){
    return(
        <>
        <div class="left_container">
            <nav>
                <div class="logo_content">
                    <img src="./logo.png" alt="logo" class="nike_logo">
                </div>
                <ul class="nav_content">
                    <li><a class="nav_links active" href="javascript:void(0)">man</a></li>
                    <li><a class="nav_links" href="javascript:void(0)">women</a></li>
                    <li><a class="nav_links" href="javascript:void(0)">kids</a></li>
                    <li><a class="nav_links" href="javascript:void(0)">customize</a></li>
                </ul>
            </nav>
            <br>
            <main class="tools">
                <div class="search">
                    <input type="text" class="search_input" placeholder="Search here....">
                    <button class="search_btn">
                        <div class="slider">
                            <i class="ri-search-line"></i>
                        </div>
                    </button>
                </div>
                <div class="discount">
                    <span class="discount_percentage">60%</span>
                    <div class="seprator"></div>
                    <span class="save_up">save up to</span>
                </div>
            </main>
            <section> 
                <main class="brand_type">
                    <div class="large_text">
                        <h2>stylist <br>sneakers</h2>
                    </div>
                    <div class="sliders">
                        <button class="slider_btn" disabled>
                            <i class="ri-arrow-left-s-line"></i>
                        </button>
                        <button class="slider_btn">
                            <i class="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                </main>
            </section>
            <br>
            <section class="bottom_shoes_slider">
                    <ul class="bottom_shoes_card">
                        <li class="card_shoe">
                            <div class="shoe_content">
                                <img src="./shoe_img/nike-air-force.png" alt="nike-air-force" class="shoe">
                            </div>
                            <div class="desc_product">
                                <div class="transparent_bg">
                                    <div class="add_to_cart">
                                        <i class="ri-add-line"></i>
                                    </div>
                                </div>
                                <div class="desc">
                                    <span class="card_product_name">nike air force</span>
                                    <span>3 colors</span>
                                    <span class="price"><i class="ri-money-euro-circle-line"></i> 230.00</span>
                                </div>
                            </div>
                        </li>
                        <li class="card_shoe">
                            <div class="shoe_content" style="background-color: #c93849;">
                                <img src="./shoe_img/nike-air-force-1-high.png" alt="nike-air-force-1-high" class="shoe">
                            </div>
                            <div class="desc_product">
                                <div class="transparent_bg">
                                    <div class="add_to_cart" style="background-color: #c93849;">
                                        <i class="ri-add-line"></i>
                                    </div>
                                </div>
                                <div class="desc">
                                    <span class="card_product_name">air force 1 high</span>
                                    <span>3 colors</span>
                                    <span class="price"><i class="ri-money-euro-circle-line"></i> 230.00</span>
                                </div>
                            </div>
                        </li>
                        <li class="card_shoe">
                            <div class="shoe_content" style="background-color: #78787C;">
                                <img src="./shoe_img/air-max-270.png" alt="air-max-270" class="shoe">
                            </div>
                            <div class="desc_product">
                                <div class="transparent_bg">
                                    <div class="add_to_cart" style="background-color: #78787C;">
                                        <i class="ri-add-line"></i>
                                    </div>
                                </div>
                                <div class="desc">
                                    <span class="card_product_name">air max 270</span>
                                    <span>3 colors</span>
                                    <span class="price"><i class="ri-money-euro-circle-line"></i> 230.00</span>
                                </div>
                            </div>
                        </li>
                        <li class="card_shoe">
                            <div class="shoe_content" style="background-color: black;">
                                <img src="./shoe_img/air-max-excee-.png" alt="air-max-excee-" class="shoe">
                            </div>
                            <div class="desc_product">
                                <div class="transparent_bg">
                                    <div class="add_to_cart" style="background-color: black;">
                                        <i class="ri-add-line"></i>
                                    </div>
                                </div>
                                <div class="desc">
                                    <span class="card_product_name">air max excee</span>
                                    <span>3 colors</span>
                                    <span class="price"><i class="ri-money-euro-circle-line"></i> 230.00</span>
                                </div>
                            </div>
                        </li>
                        <li class="card_shoe">
                            <div class="shoe_content" style="background-color: #959ebd;">
                                <img src="./shoe_img/nike-span-2.png" alt="nike-span-2" class="shoe">
                            </div>
                            <div class="desc_product">
                                <div class="transparent_bg">
                                    <div class="add_to_cart" style="background-color: #959ebd;">
                                        <i class="ri-add-line"></i>
                                    </div>
                                </div>
                                <div class="desc">
                                    <span class="card_product_name">nike span 2</span>
                                    <span>3 colors</span>
                                    <span class="price"><i class="ri-money-euro-circle-line"></i> 230.00</span>
                                </div>
                            </div>
                        </li>
                    </ul>
            </section>
        </div>
  
        
        </>
    );
}