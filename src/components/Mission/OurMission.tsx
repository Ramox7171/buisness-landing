
import { SelectedPage } from '../../shared/types.helper'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurMission = ({setSelectedPage}:Props) => {
  return (
    <section id="ourmission">

    <div>OurMission</div>
    </section>
  )
}

export default OurMission