package com.mss.pmj.pmjmis.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.pmjmis.domain.Channel;


public interface ChannelRepository extends JpaRepository<Channel, Long>{
	
	public Channel findByChannelName(String name);

}
