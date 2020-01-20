import { h, Component, Fragment } from 'preact'

export default class Movie extends Component {
    render() {
        const { schedule, poster, onScheduleClick, filmName } = this.props;
        return (
            <Fragment>
                <img className="poster"
                    src={poster}
                    alt="Постер фильма" />
                <ul className="schedule">
                    {schedule.map(entry => (
                        <li className="schedule__time">
                            <button
                                className="schedule__time-button"
                                onClick={() => {onScheduleClick({
                                    time: entry,
                                    film: filmName,
                                    seats: 0
                                })}}>
                                {entry}
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    {schedule.length > 3 ? 'sosat' : 'hui'}
                </div>
            </Fragment>
        );

    }
}