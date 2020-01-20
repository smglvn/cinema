import { h, Component } from 'preact'
import { useState } from 'preact/hooks';
import Movie from "../Movie/Movie";
import { createPortal } from 'preact/compat';
import './App.css'

export default class App extends Component {
    render() {
        const container = document.getElementById('modals');
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [currentModalContent, setCurrentModalContent] = useState({});
        const { time, film, seats } = currentModalContent;

        const onModalClick = (modalContent) => { 
            setCurrentModalContent(modalContent);
            setModalIsOpen(true) 
        };

        return (
            <div>
                {modalIsOpen && createPortal(
                    <div className="modal">
                        <div className="modal__container">
                            {film} starts at {time}
                        </div>
                        <div>seats {seats}</div>
                    </div>,
                    container)}
                <h1 className="header">
                    Пятница, 22 ноября
                </h1>
                <ul className="movie-list">
                    <li className="movie-list__entry">
                        <Movie
                            poster={"https://sun9-20.userapi.com/c856032/v856032322/177f4a/GbtPOQBAsLw.jpg"}
                            onScheduleClick={onModalClick}
                            filmName="sosat"
                            schedule={[
                                '10:00',
                                '12:00'
                            ]}
                        />
                    </li>
                    <li className="movie-list__entry">
                        <Movie
                            poster={"https://mcswebsites.blob.core.windows.net/1013/Event_7123/portrait_medium/plfykyRw.jpg"}
                            onScheduleClick={onModalClick}
                            filmName="suda"
                            schedule={[
                                '10:00',
                                '12:00',
                                '14:00',
                                '16:00',
                                '18:00',
                                '20:00',
                            ]}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}