package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.Channel;


public interface ChannelRepository extends JpaRepository<Channel, Long>{
	
	public Channel findByChannelName(String name);

}
