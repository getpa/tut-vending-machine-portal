import './ListView.css';

import PayName from '../../data/payname.json';
import { Utterances } from 'utterances-react-component'


export function ListView(props) {
  return (
    <div class="list-outer">{
      props.vms.map(
        vm =>
          <div class="list-inner">
            <h2>{vm.name}</h2>
            <span>Accepts:</span>
            <ul>{vm.accepts.map(pay => <li>{PayName[pay]}</li>)}</ul>
            <Utterances
              repo="getpa/tut-vending-machine-portal"
              issueTerm={vm.name}
              label="comments"
              theme="github-light"
            />
          </div>
      )
    }
    </div>
  );
}
