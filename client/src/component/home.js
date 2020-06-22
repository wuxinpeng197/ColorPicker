import React from 'react';
import SliderRGB from "./colorSlider";
import Color from "./color";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            colorsNum: 1,
            colors: {
                r: 0,
                g: 0,
                b: 0
            },
            hexCode: 0,
        };
    }

    // useStyles = makeStyles((theme) => ({
    //     root: {
    //         flexGrow: 1,
    //     },
    //     paper: {
    //         padding: theme.spacing(2),
    //         textAlign: 'center',
    //         color: theme.palette.text.secondary,
    //     },
    // }));

    getColor(value) {
        if (value.has('red')) {
            this.setState({
                colors: {
                    ...this.state.colors,
                    r: value.get('red'),
                }
            })
        };
        if (value.has('blue')) {
            this.setState({
                colors: {
                    ...this.state.colors,
                    b: value.get('blue'),
                }
            })
        };
        if (value.has('green')) {

            this.setState({
                colors: {
                    ...this.state.colors,
                    g: value.get('green'),
                }
            })
        }

    }

    fullColorHex() {
        var hex = this.rgbToHex(this.state.colors.r, this.state.colors.g, this.state.colors.b);
        this.setState({
            hexCode: hex,
        });
        console.log(this.state.hexCode);
    };

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    render() {
        return (
            <div>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div>
                                <SliderRGB getvalue={this.getColor.bind(this)} /><br></br>
                            </div>

                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="outlined-helperText"
                                label="Helper text"
                                defaultValue="0px"
                                helperText="RED"
                                variant="outlined"
                                onChange={event => {
                                    const { value } = event.target;
                                    this.setState({
                                        colors: {
                                            ...this.state.colors,
                                            r: value,
                                        }
                                    });
                                }} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="outlined-helperText"
                                label="Helper text"
                                defaultValue="0px"
                                helperText="GREEN"
                                variant="outlined"
                                onChange={event => {
                                    const { value } = event.target;
                                    this.setState({
                                        colors: {
                                            ...this.state.colors,
                                            g: value,
                                        }
                                    });
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="outlined-helperText"
                                label="Helper text"
                                defaultValue="0px"
                                helperText="BLUE"
                                variant="outlined"
                                onChange={event => {
                                    const { value } = event.target;
                                    this.setState({
                                        colors: {
                                            ...this.state.colors,
                                            b: value,
                                        }
                                    });
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <div classname='color-container'>
                                <Color hexCode={this.state.hexCode}></Color>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <button onClick={this.fullColorHex.bind(this)} >Get Image</button>
                        </Grid>
                    </Grid>
                </div>
                <footer className="bck_blue">
                    <div className="footer_logo">
                    </div>
                    <div className="footer_discl">
                        Matthew Wu Demo
                     </div>
                </footer>
            </div>
        )
    }
};

export default App;
