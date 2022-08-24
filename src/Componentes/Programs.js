import { Grid } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'

function Programs({ cont }) {

    console.log(cont)
    return (
        <div>
            <div className="viewProyect">

                <div className="cardProgram">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="p1">
                                <label className="titulos">{cont.title}</label>
                                <a href={cont.linkGit}
                                    target='_blank' rel='noreferrer'>
                                    <img src={cont.icon}
                                        alt='ejemplo memoria'
                                        className="programMemoria"
                                    />

                                </a>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="cardData">
                                <div className="datosProgram">
                                    <p>
                                        {cont.p1}
                                    </p>
                                    <p>

                                        {cont.p2}
                                    </p>
                                </div>

                            </div>
                        </Grid>
                    </Grid>



                </div>
                <div className="video">
                    <p>
                        Video explicando el funcionamiento del programa
                    </p>
                    <ReactPlayer
                        className='videostyle'
                        width='500px' height='300px'
                        url={cont.linkVideo} controls />
                </div>

            </div>
        </div>
    )
}

export default Programs