import React from 'react'
import heineken from '../Images/Photo/heinekein.png'
import Desi from '../Images/Photo/somras.png'
import Whiskey from '../Images/Photo/jefferson.png'
import Vodka from '../Images/Photo/taaka.png'
import Rum from '../Images/Photo/bacardi.png'
import Cocktail from '../Images/Photo/istockphoto.png'

export default function Category() {
    return (
        <div className='mt-5 '>
            <h2 className='text-center my-5'>Our Products</h2>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div class="card mb-3 Work text-light">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={heineken} class="img-fluid rounded-start p-3" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="card-title">Heineken</h3>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="card mb-3 Work text-light">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Desi} class="img-fluid rounded-start p-3" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="card-title">Somras</h3>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="card mb-3 Work text-light">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Whiskey} class="img-fluid rounded-start p-3" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="card-title">Jefferson's</h3>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="card mb-3 Work text-light">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Vodka} class="img-fluid rounded-start p-3" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="card-title">Takka</h3>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="card mb-3 Work text-light">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Rum} class="img-fluid rounded-start p-3" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="card-title">Bacardi</h3>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="card mb-3 Work text-light">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Cocktail} class="rounded-start p-3 ms-3" height="210px" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="card-title">Cocktail</h3>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
