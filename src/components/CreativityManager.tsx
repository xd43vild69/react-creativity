
import DropdownElements, { IElements } from './DropdownElements'
import ButtonElements from './ButtonElements'
import Feedback from './Feedback'
import ButtonStart from './ButtonStart'

const CreativityManager = () => {

const arrayElements: Array<IElements> = [{label:"1", value:"2"}, {label:"1x", value:"2x"}, {label:"1x", value:"2y"}]

    return (
        <div>
            <div className="buttonElements">
                <ButtonElements name="Level" />
                <ButtonStart name="Start" />
            </div>
            <div className="DDLElements">
                <DropdownElements name="Soundtrack" options={arrayElements} />
                {/* <DropdownElements name="Composition Elements" options={arrayElements} />
                <DropdownElements name="Themes" options={arrayElements} /> */}
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


