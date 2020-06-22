import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


class SliderRGB extends React.Component {

blueHandleSlider(event, value){
    var set = new Map();
    set.set('blue',value)
    this.props.getvalue(set);
}

redHandleSlider(event, value){
    var set = new Map();
    set.set('red',value);
    this.props.getvalue(set);
}

greenHandleSlider(event, value) {
    var set = new Map();
    set.set('green',value);
    this.props.getvalue(set);
}

useStyles = makeStyles((theme) => ({
    root: {
        width: 100,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

marks = [
    // {
    //     value: 0,
    //     label: '0px',
    // },
    // {
    //     value: 8,
    //     label: '8px',
    // },
    // {
    //     value: 16,
    //     label: '16px',
    // },
    {
        value: 255,
        label: '256px',
    },
];

valuetext(value) {
    return `${value}px`;
};

render() {
    return (
        <div >
            <Typography id="discrete-slider-custom" gutterBottom>
                Red
            </Typography>
            <Slider
                defaultValue={0}
                onChange={(event, value) => this.redHandleSlider(event, value)}
                min={0}
                max={256}
                getAriaValueText={this.valuetext}
                aria-labelledby="discrete-slider-custom"
                step={32}
                valueLabelDisplay="auto"
                marks={this.marks}
            />
            <Typography id="discrete-slider-custom" gutterBottom>
                Green
            </Typography>
            <Slider
                defaultValue={0}
                onChange={(event, value) => this.greenHandleSlider(event, value)}
                min={0}
                max={256}
                getAriaValueText={this.valuetext}
                aria-labelledby="discrete-slider-custom"
                step={32}
                valueLabelDisplay="auto"
                marks={this.marks}

            />
            <Typography id="discrete-slider-custom" gutterBottom>
                Blue
            </Typography>
            <Slider
                defaultValue={0}
                onChange={(event, value) => this.blueHandleSlider(event, value)}
                min={0}
                max={256}
                getAriaValueText={this.valuetext}
                aria-labelledby="discrete-slider-custom"
                step={32}
                valueLabelDisplay="auto"
                marks={this.marks}
            />
        </div>
    );
}
}

export default SliderRGB;