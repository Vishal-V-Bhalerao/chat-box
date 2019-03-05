import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSendClick(textEle){
    console.log(textEle.value);
    let parentContainerDiv = document.createElement('div');
    parentContainerDiv.style.display = "flex";
    parentContainerDiv.style.justifyContent = "flex-end";

    let containerDiv = document.createElement('div');
    containerDiv.style.display = 'inline-block';
    containerDiv.style.backgroundColor = '#82ccdd';
    containerDiv.style.width = 'auto';
    containerDiv.style.padding = '15px 20px';
    containerDiv.style.borderRadius = '20px';
    containerDiv.style.margin="10px 10px";
    containerDiv.textContent = textEle.value;

    parentContainerDiv.appendChild(containerDiv)
    document.getElementById('chatBox').appendChild(parentContainerDiv);

    textEle.value = "";
  }
}
