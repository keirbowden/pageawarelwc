import { LightningElement, api } from 'lwc';

export default class AppBuilderPageAware extends LightningElement {
    _pageType;
    _recordId;
    details='';

    @api get pageType() {
        return this._pageType;
    }

    set pageType(value) {
        this._pageType=value;
        this.details+='I am in a(n) ' + this._pageType + ' page\n';
        switch (this._pageType) {
            case 'record' :
                 this.details+='Initialisation will happen when the record id  is set (which may already have happened)\n';
                 break;
                ;;
            case 'app' :
            case 'home' :
                this.details+='Initialising\n';
                break;
        }                
    }

    @api get recordId() {
        return this._recordId;
    }

    set recordId(value) {
        this._recordId=value;
        this.details+='I have received record id ' + this._recordId + ' - initialising\n';
    }

}