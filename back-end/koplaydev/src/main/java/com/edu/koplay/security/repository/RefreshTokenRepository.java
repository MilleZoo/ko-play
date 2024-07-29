package com.edu.koplay.security.repository;

import com.edu.koplay.security.model.RefreshToken;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends CrudRepository<RefreshToken, String> {

    // accessToken으로 RefreshToken 조회하기
    Optional<RefreshToken> findByAccessToken(String accessToken);
}
