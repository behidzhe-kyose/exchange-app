import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import history from '../../history';
import TableStriped from './Table';
import { getHistoricalInfoHuobi } from '../../actions/huobi';

const ModalWindow = ({ name, header, source, pair, content }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const huobi_history = useSelector(state => state.huobi_history)
    const pathname = history.location.pathname;

    const openModal = () => {
        history.push(`${pathname}/details`);
        if(source === 'huobi') {
            let term = pair.from + pair.to;
            dispatch(getHistoricalInfoHuobi(term.toLowerCase()))
        }
    }

    return (
        <Modal
            onClose={() => { setOpen(false); history.go(-1) }}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button basic className="btn btn-accent" onClick={() => openModal()}>{name}</Button>}
        >
            <Modal.Header>{header}</Modal.Header>
            <Modal.Content>
                {source === 'huobi' ? 
                <TableStriped source={source} historicalData={huobi_history} /> :
                <TableStriped source={source} historicalData={content} /> }
            </Modal.Content>
            <Modal.Actions>
                <Button
                    content="Done"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => { setOpen(false); history.go(-1) }}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default ModalWindow