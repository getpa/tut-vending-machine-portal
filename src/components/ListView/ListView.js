import './ListView.css';

import VmList from '../../data/vmlist.json';
import PayName from '../../data/payname.json';

import { Utterances } from 'utterances-react-component'

export function ListView() {
  return (
    <div class="list-outer">{
      VmList.map(
        vm =>
        <div class="list-inner">
            <h2>{vm.name}</h2>
            <span>Accepts:</span>
            <ul>{vm.accepts.map(pay => <li>{ PayName[pay] }</li>)}</ul>
          <Utterances
            repo="getpa/tut-vending-machine-portal"
            issueTerm={vm.name}
            label="comments"
            theme="github-light"
          />
        </div>
      )
    }</div>
  );
}
