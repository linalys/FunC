import React, { Component } from 'react';
import { Container, Card, CardBody } from 'reactstrap';


export default class Java extends Component {
  render() {
    return (
      <Container>
        <Card>
          <CardBody>
            <link rel="stylesheet" href="java.css"></link>

            <section class="mb-5">

  <div class="md-accordion accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

    <div class="card">

      <div class="card-header" role="tab" id="headingOne">

        <div class="dropdown float-left">
          <button class="btn btn-info btn-sm m-0 mr-3 p-2 dropdown-toggle" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-pencil-alt"></i>
          </button>
          <div class="dropdown-menu dropdown-info">
            <a class="dropdown-item" href="#">Add new</a>
            <a class="dropdown-item" href="#">Rename folder</a>
            <a class="dropdown-item" href="#">Delete folder</a>
          </div>
        </div>

        <a id="folder-1" data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne"
           aria-expanded="true" aria-controls="collapseOne">
          <h5 class="mt-1 mb-0">
            <span>Folder 1</span>
            <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>

      </div>

      <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
          squid. 3 wolf moon officia aute,
          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
          shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
          accusamus
          labore sustainable VHS.
        </div>
      </div>
    </div>

    <div class="card">

      <div class="card-header" role="tab" id="headingTwo">

        <div class="dropdown float-left">
          <button class="btn btn-info btn-sm m-0 mr-3 p-2 dropdown-toggle" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-pencil-alt"></i>
          </button>
          <div class="dropdown-menu dropdown-info">
            <a class="dropdown-item" href="#">Add new</a>
            <a class="dropdown-item" href="#">Rename folder</a>
            <a class="dropdown-item" href="#">Delete folder</a>
          </div>
        </div>

        <a id="folder-2" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo"
           aria-expanded="true" aria-controls="collapseTwo">
          <h5 class="mt-1 mb-0">
            <span>Folder 2</span>
            <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>

      </div>

      <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
          squid. 3 wolf moon officia aute,
          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
          shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
          accusamus
          labore sustainable VHS.
        </div>
      </div>
    </div>

    <div class="card">

      <div class="card-header" role="tab" id="headingThree">

        <div class="dropdown float-left">
          <button class="btn btn-info btn-sm m-0 mr-3 p-2 dropdown-toggle" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-pencil-alt"></i>
          </button>
          <div class="dropdown-menu dropdown-info">
            <a class="dropdown-item" href="#">Add new</a>
            <a class="dropdown-item" href="#">Rename folder</a>
            <a class="dropdown-item" href="#">Delete folder</a>
          </div>
        </div>

        <a id="folder-3" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree"
           aria-expanded="true" aria-controls="collapseThree">
          <h5 class="mt-1 mb-0">
            <span>Folder 3</span>
            <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>

      <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
          squid. 3 wolf moon officia aute,
          non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
          shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
          farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
          accusamus
          labore sustainable VHS.
        </div>
      </div>
    </div>
  </div>

</section>
          </CardBody>
        </Card>
      </Container>

    );
  }
}
