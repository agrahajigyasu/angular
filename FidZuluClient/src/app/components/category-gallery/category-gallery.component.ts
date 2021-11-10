import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Meet {{teamName}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <div class="card" *ngFor="let member of teamMembers">
        <div class="card-body">
          {{member}}
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})

export class NgbdModalContent implements OnInit{
  @Input() name: any;
  
  listObjects:any = [];
  teamName:string='';
  teamMembers:any=[];
  objects: any = [];
  object: any = null;

  constructor( private dataService : DataService, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.dataService.getTeams("classA","toy").subscribe(data =>{
      this.listObjects = data;
      console.log(data);
      this.teamName = this.listObjects[0].team;
      this.teamMembers= this.listObjects[0].membersNames;
    });
  }
}

@Component({
  selector: 'app-category-gallery',
  templateUrl: './category-gallery.component.html',
  styleUrls: ['./category-gallery.component.scss']
})
export class CategoryGalleryComponent implements OnInit {

  constructor( private dataService : DataService, private modalService: NgbModal) { }


  ngOnInit(): void {

  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

}
