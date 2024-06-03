import { useRecoilValue, useRecoilState, RecoilRoot } from 'recoil';
import { CountAtom, evenSelector } from './atom';





function Recoil() {
    return (
        <div>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </div>
    )
}

function Count() {
    console.log('Count re-rendered')
    return <div>
    
        <CountRenderer />
        <Button />
    </div>
}

function CountRenderer() {
    const count  = useRecoilValue(CountAtom);
    return <div>
        <p>{count}</p>
        <EvenCountRenderer />
    </div>
}

function EvenCountRenderer() {
    const isEven = useRecoilValue(evenSelector)
    return (
        <div>
            {isEven ? 'even Number' : ''}
        </div>
    )
}
function Button() {

    const [count,setCount] = useRecoilState(CountAtom)
    return <div>
        <button onClick={() => setCount(count + 1) }>increament</button>
    </div>
}
export default Recoil