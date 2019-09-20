$(document).ready(function() {
	
	
	
	      
	
	
	
	$("#contact_form").bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            orderId: {
            	validators:{
            	regexp: {
                	regexp:/^[A-Za-z0-9.-\s]+$/,
                        message:'please enter digits, letters and special characters . and - only'
                        	
                        		
                    },
                        notEmpty: {
                        message: 'Please supply your orderId'
                    }
            	}
                },
        
            docketNumber: {
            	validators:{
            	   regexp: {
                	regexp:/^[A-Za-z0-9.-\s]+$/,
                    message:'please enter digits, letters and special characters . and - only'
                    },
                    notEmpty: {
                        message: 'Please supply your docketNumber'
                    }
            	}
                },
                /* checklistDate: {
                    validators: {
                        notEmpty: {
                            message: 'The date is required'
                        },
                        checklistDate: {
                            format: 'MM/DD/YYYY',
                            message: 'The date is not a valid'
                        }
                       
                    }
                },
                
               
                   
                   
                     orderDate: {
                 validators: {
                	 datepicker: {
                         format: 'YY/MM/DD',
                         message: 'The date is not a valid'
                     },
                      notEmpty: {
                         message: 'Please pick your orderDate'
                          }
                 }
                        },
                    dispatchDate: {
                        validators: {
                        	datepicker: {
                                format: 'YY/MM/DD',
                                message: 'The date is not a valid'
                            },
                           notEmpty: {
                              message: 'Please pick your dispatchDate'
                                }
                        }
                            },*/
                  source: {
                      validators: {
                    	  regexp: {
                       	regexp:/^[A-Za-z\s]+$/,
                         message:'please enter characters only '
                                  },
                         notEmpty: {
                         message: 'Please pick your source'
                                }
                      }
                                },
                     productName: {
                       validators: {
                    	   regexp: {
                          	regexp:/^[A-Za-z0-9\s]+$/,
                             message:'please enter characters and digits only '
                                 },
                            notEmpty: {
                        message: 'Please pick your productName'
                                     }
                       }
                                   },
                        productQuantity: {
                         validators: {
                        	 regexp: {
                               regexp:/^[0-9\s]+$/,
                               message:'please enter digits only '
                                       },
                              notEmpty: {
                               message: 'Please pick your productQuantity'
                                      }
                         }
                                       },
                          productWarranty: {
                               validators: {
                            	   	
                               
                                notEmpty: {
                                   message: 'Please pick your productWarranty'
                                          }
                               }
                                            },
                                  msn: {
                                validators: {
                                	 regexp: {
                                   regexp:/^[A-Za-z0-9\s]+$/,
                                    message:'please enter characters and digits only '
                                                },
                                     notEmpty: {
                                      message: 'Please pick your msn'
                                                    }
                                }
                                                },
                                 warrantyPeriod: {
                                 validators: {
                                	     	
                                
                                  notEmpty: {
                                         message: 'Please pick your warrantyPeriod'
                                                        }
                                 }
                                                    },
                                    modeOfPayment: {
                                   validators: {
                                	             	
                                     
                                   notEmpty: {
                                             message: 'Please pick your modeOfPayment'
                                               }
                                   }
                                            },
                               courierProviderName: {
                                          validators: {
                                        	  regexp: {
                                            	regexp:/^[A-Za-z\s]+$/,
                                                  	message:'please enter characters only '
                                                     },
                                            notEmpty: {
                                                 message: 'Please pick your courierProviderName'
                                                    }
                                          }
                                                     },
                                                            
                            
                                   shipmentPrice: {
                                        validators: {
                                        	 regexp: {
                                       	regexp:/^[0-9.\s]+$/,
                                        message:'please enter digits and . symbol only '
                                               },
                                     notEmpty: {
                                               message: 'Please pick your shipmentPrice'
                                                        }
                                        }
                                                     },
                                     salesPrice: {
                                    validators: {
                                    	 regexp: {
                                 regexp:/^[0-9.\s]+$/,
                                        message:'please enter digits and . symbol only '
                                                                },
                                          notEmpty: {
                                                message: 'Please pick your salesPrice'
                                                             }
                                    }
                                                       },
                                   entryTax: {
                                             validators: {
                                            	 regexp: {
                                                  	regexp:/^[0-9.\s]+$/,
                                                 message:'please enter digits and . symbol only '
                                                                         },
                                              notEmpty: {
                                                       message: 'Please pick your entryTax'
                                                                   }
                                             }
                                                                  },
                                                                  
                                   checkPincode: {
                                             validators: {
                                            	               	
                                                    
                                              notEmpty: {
                                                    message: 'Please pick your checkPincode'
                                                                          }
                                             }
                                                                    },
                                    customerImage: {
                                      validators: {
                                    	                                                      	
                                      
                                            notEmpty: {
                                 message: 'Please pick your customerImage'
                                                               }
                                      }
                                                                   },
                                        formName: {
                                              validators: {
                                            	  regexp: {                                                                           	
                                            	  regexp:/^[A-Za-z\s]+$/,
                                                  message:'please enter characters only '
                                                                                     },
                                                   notEmpty: {
                                                        message: 'Please pick your formName'
                                                                                   }
                                              }
                                                                                     },
                                              dispatched: {
                                              validators: {
                                            	                                                                                                        	
                                             
                                                           notEmpty: {
                                                              message: 'Please pick your dispatched'
                                                                                     }
                                              }
                                                                             },
                                                  invoiceToAccountant: {
                                                                          validators: {
                                                                        	                                                                                                              	
                                                                     
                                                                               notEmpty: {
                                                                      message: 'Please pick your invoiceToAccountant'
                                                                                                                }
                                                                          }
                                                                                                        },
                                                createdBy : {
                                                    validators: {
                                                    	 regexp: {
                                                    	  regexp:/^[A-Za-z\s]+$/,
                                                          message:'please enter characters only '
                                                                                        },
                                                                 notEmpty: {
                                                        message: 'Please pick your createdBy'
                                                                                                  }
                                                    }
                                                                                          }                                                                                                 
                                                                                                                             
                                                       }
        })
       
                
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
})
