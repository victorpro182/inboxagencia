<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Agencias extends CI_Controller {


	public function index()
	{
		$this->load->view('inicio/header');
		$this->load->view('agencia/index');
		$this->load->view('inicio/footer');
	}
}
