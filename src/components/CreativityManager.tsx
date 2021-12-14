import React, { FC, useState, useEffect } from 'react'
import DropdownElements, { IElements } from './DropdownElements'
import ButtonElements from './ButtonElements'
import Feedback from './Feedback'
import ButtonStart from './ButtonStart'
import CreativitySelection from './CreativitySelection'

const CreativityManager = () => {

    // const arrayElements: Array<IElements> = [{ label: "1", value: "2" }, { label: "1x", value: "2x" }, { label: "1x", value: "2y" }]
    const [startButtonName, setStartButtonName] = useState<string>("Start");
    const [soundtrack, setSoundtrack] = useState([]);
    const [compositionElements, setCompositionElements] = useState([]);
    const [themes, setThemes] = useState([]);

    const [selSoundtrack, setSelSoundtrack] = useState("");
    const [selCompositionElements, setSelCompositionElements] = useState("");
    const [selThemes, setSelThemes] = useState("");

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

        let c = new CreativitySelection();
        setSelSoundtrack(c.getSelection(soundtrack));
        setSelCompositionElements(c.getSelection(compositionElements));
        setSelThemes(c.getSelection(themes));
        console.log(Object.values(selThemes)[1]);
    }

    return (
        <div>
            <div className="buttonElements">
                <ButtonElements name="Level" />
                <ButtonStart name={startButtonName} handleButtonStart={handleButtonStart} />
            </div>
            <div className="DDLElements">
                <DropdownElements name="Soundtrack" options={soundtrack} selection={Object.values(selSoundtrack)[1]} />
                <DropdownElements name="Composition Elements" options={compositionElements} selection={Object.values(selCompositionElements)[1]} />
                <DropdownElements name="Themes" options={themes} selection={Object.values(selThemes)[1]} />
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


