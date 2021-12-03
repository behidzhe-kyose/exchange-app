import React, { useEffect, useState } from 'react';
import { Input, Grid, Button } from 'semantic-ui-react';
import { setPairs } from '../../actions';
import { getExchangeBinance } from '../../actions/binance';
import { getExchangeHuobi } from '../../actions/huobi';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');

    useEffect(() => {
        if(debouncedTerm) {
            setInterval(() => {
                console.log(debouncedTerm)
                dispatch(getExchangeBinance(debouncedTerm))
                dispatch(getExchangeHuobi((debouncedTerm.replace('-', '')).toLowerCase()))
            }, 5000);
        }
    }, [debouncedTerm])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        let pair = inputValue.split('-');
        dispatch(setPairs(pair))
        setDebouncedTerm(inputValue)
    }
    return (
        <form onSubmit={onSubmit} className="search-form">
            <Grid style={{ paddingTop: '20px'}} verticalAlign="middle">
                <Grid.Column width={2}>
                    <a href="/">Home</a>
                </Grid.Column>
                <Grid.Column width={8} fluid>
                    <Input fluid
                        icon='search'
                        aligned='center'
                        placeholder="Ex. BNB-BTC"
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </Grid.Column>
                <Grid.Column  width={4} >
                    <Button primary type="submit">Submit</Button>
                </Grid.Column>

            </Grid>
        </form>
    )
}

export default SearchBar;