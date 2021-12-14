import React, { FC, useState, useEffect } from 'react'
import DropdownElements, { IElements } from './DropdownElements'
import ButtonElements from './ButtonElements'
import Feedback from './Feedback'
import ButtonStart from './ButtonStart'

const CreativityManager = () => {

    const arrayElements: Array<IElements> = [{ label: "1", value: "2" }, { label: "1x", value: "2x" }, { label: "1x", value: "2y" }]
    const [startButtonName, setStartButtonName] = useState<string>("Start");
    const [soundtrack, setSoundtrack] = useState([]);
    const [themes, setThemes] = useState([]);
    const [compositionElements, setCompositionElements] = useState([]);

    useEffect(() => {
        const getSoundtracks = async () => {
            const tasksFromServer = await fetchSoundtrack();
            setSoundtrack(tasksFromServer);
        };

        getSoundtracks();

        const getThemes = async () => {
            const tasksFromServer = await fetchThemes();
            setThemes(tasksFromServer);
        };

        getThemes();

        const getCompositionElements = async () => {
            const tasksFromServer = await fetchCompositionElements();
            setCompositionElements(tasksFromServer);
        };

        getCompositionElements();

    }, []);

    const fetchSoundtrack = async () => {
        const res = await fetch("http://localhost:3000/soundtrack");
        const data = await res.json();
        return data;
    };

    const fetchThemes = async () => {
        const res = await fetch("http://localhost:3000/themes");
        const data = await res.json();
        return data;
    };

    const fetchCompositionElements = async () => {
        const res = await fetch("http://localhost:3000/compositionElements");
        const data = await res.json();
        return data;
    };

    const handleButtonStart = () => {
        setStartButtonName("Restart");
    }

    return (
        <div>
            <div className="buttonElements">
                <ButtonElements name="Level" />
                <ButtonStart name={startButtonName} handleButtonStart={handleButtonStart} />
            </div>
            <div className="DDLElements">
                <DropdownElements name="Soundtrack" options={soundtrack} />
                <DropdownElements name="Composition Elements" options={compositionElements} />
                <DropdownElements name="Themes" options={themes} />
            </div>
            <div className="container"></div>
            <footer className="feedback">
                <Feedback />
                <div>Footer</div>
            </footer>
        </div>
    )
}

export default CreativityManager


