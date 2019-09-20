package com.mbb.mbbplatform.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transferlocation")
public class TransferLocation {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;

private String transferLocation;

private Long count;

public Long getId() {
return id;
}

public void setId(Long id) {
this.id = id;
}

public String getTransferLocation() {
return transferLocation;
}

public void setTransferLocation(String transferLocation) {
this.transferLocation = transferLocation;
}

public Long getCount() {
return count;
}

public void setCount(Long count) {
this.count = count;
}

}