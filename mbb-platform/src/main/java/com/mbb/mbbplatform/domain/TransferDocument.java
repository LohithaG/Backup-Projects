package com.mbb.mbbplatform.domain;

import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "transferdocument")
public class  TransferDocument {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;

private String fileType;

private String fileName;

@CreationTimestamp
private ZonedDateTime createdTime;

@UpdateTimestamp
private ZonedDateTime updatedTime;

@ManyToOne
@JoinColumn(name="packageId")
private TransferInventory packageId;

public TransferInventory getPackageId() {
return packageId;
}

public void setPackageId(TransferInventory packageId) {
this.packageId = packageId;
}


public Long getId() {
return id;
}

public void setId(Long id) {
this.id = id;
}

public String getFileType() {
return fileType;
}

public void setFileType(String fileType) {
this.fileType = fileType;
}

public String getFileName() {
return fileName;
}

public void setFileName(String fileName) {
this.fileName = fileName;
}

public ZonedDateTime getCreatedTime() {
return createdTime;
}

public void setCreatedTime(ZonedDateTime createdTime) {
this.createdTime = createdTime;
}

public ZonedDateTime getUpdatedTime() {
return updatedTime;
}

public void setUpdatedTime(ZonedDateTime updatedTime) {
this.updatedTime = updatedTime;
}



}
