import { Component } from '@angular/core';
import data from "../assets/data.json";
import { IDropdownSettings } from 'ng-multiselect-dropdown';



interface dataTest {
  idMouvement?: number | null;
  numerotationMvt?: string | null; 
  dateMouvement?: string| null;
  etatMouvement?: string| null;
  originMouvement?: string| null;
  descriptionMouvement?: string| null;
  quantite?: number| null;
  prixUnitaire?: number| null;
  montantTotal?: number| null;
  cump?: number| null;
  nomTier?: string| null;
  prenomTier?: string| null;
  raisonSocialTier?: string | null;
  tierId?: number| null;
  codeDepot?: string| null;
  idDepot?: number| null;
  idMarqueProduit?: number | null;
  codeMarqueProduit?: string| null;
  libelleMarqueProduit?: string| null;
  libelleProduit?: string| null;
  codeProduit?: string| null;
  idProduit?: number| null;
  codeCategorie?: string| null;
  libelleCategorie?: string| null;
  methodeValorisationStock?: string| null;
  idCategorie?: number| null;
  typeDocumentOrigin?: string| null;
  idDocument?: number| null;
  numerotationDocument?: string| null;
  statusDocument?: string| null;
  natureMouvement?: string| null;
}

interface dropdownList{
  item_id : number,
  item_text : string,
  display : boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  datatest !: dataTest[];
  itemsTest !: string[];
  dropdownList !: dropdownList[];
  selectedItems !: dropdownList[];
  dropdownSettings = {};
  
  ngOnInit() {
    this.datatest = data;
    console.log(this.datatest[1]);

    this.itemsTest = [
      "idMouvement","numerotationMvt","dateMouvement","etatMouvement","originMouvement","descriptionMouvement","quantite","prixUnitaire","montantTotal","cump","nomTier","prenomTier","raisonSocialTier","tierId","codeDepot","idDepot","idMarqueProduit","codeMarqueProduit","libelleMarqueProduit","libelleProduit","codeProduit","idProduit","codeCategorie","libelleCategorie","methodeValorisationStock","idCategorie","typeDocumentOrigin","idDocument","numerotationDocument","statusDocument","natureMouvement","libelleUnite","codeUnite","idUnite","libelleSousFamille","codeSousFamille","idSousFamille"
    ]

    this.dropdownList = [
      { item_id: 1, item_text: 'idMouvement' ,display: true},
      { item_id: 2, item_text: 'numerotationMvt' ,display: true},
      { item_id: 3, item_text: 'dateMouvement' ,display: true},
      { item_id: 4, item_text: 'etatMouvement' ,display: true},
      { item_id: 5, item_text: 'originMouvement' ,display: true},
      { item_id: 6, item_text: 'descriptionMouvement' ,display: true},
      { item_id: 7, item_text: 'quantite' ,display: true},
      { item_id: 8, item_text: 'prixUnitaire' ,display: true},
      { item_id: 9, item_text: 'montantTotal' ,display: true},
      { item_id: 10, item_text: 'cump' ,display: true},
      { item_id: 11, item_text: 'nomTier' ,display: true},
      { item_id: 13, item_text: 'prenomTier' ,display: true},
      { item_id: 14, item_text: 'raisonSocialTier' ,display: true},
      { item_id: 15, item_text: 'tierId' ,display: true},
      { item_id: 16, item_text: 'codeDepot' ,display: true},
      { item_id: 17, item_text: 'idDepot' ,display: true},
      { item_id: 18, item_text: 'idMarqueProduit' ,display: true},
      { item_id: 19, item_text: 'codeMarqueProduit' ,display: true},
      { item_id: 20, item_text: 'libelleMarqueProduit' ,display: true},
      { item_id: 21, item_text: 'libelleProduit' ,display: true},
      { item_id: 22, item_text: 'codeProduit' ,display: true},
      { item_id: 23, item_text: 'idProduit' ,display: true},
      { item_id: 24, item_text: 'codeCategorie' ,display: true},
      { item_id: 25, item_text: 'libelleCategorie' ,display: true},
      { item_id: 26, item_text: 'methodeValorisationStock' ,display: true},
      { item_id: 27, item_text: 'idCategorie',display: true },
      { item_id: 28, item_text: 'typeDocumentOrigin',display: true },
      { item_id: 19, item_text: 'idDocument',display: true },
      { item_id: 30, item_text: 'numerotationDocument',display: true },
      { item_id: 31, item_text: 'statusDocument' ,display: true},
      { item_id: 32, item_text: 'natureMouvement',display: true },
    ];


    this.selectedItems = [

    ];


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(this.dropdownList[item.item_id-1]);
    this.dropdownList[item.item_id-1].display =! this.dropdownList[item.item_id-1].display;
  }
  onSelectAll(items: any) {
    console.log(items);
  }



  
}
