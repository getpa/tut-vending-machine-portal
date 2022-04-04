import './ListView.css';

import VmList from './data/vmlist.json';

import { Utterances } from 'utterances-react-component'

function ListView() {
  return (
    <div class="list-outer">{
      VmList.map(
        vm =>
        <div class="list-inner">
          <h2>{vm.name}</h2>
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

export default ListView;
