package com.edu.koplay.service;

import com.edu.koplay.persistence.RefreshTokenRepository;
import com.edu.koplay.redis.RefreshToken;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class RefreshTokenService {
    Logger logger = LoggerFactory.getLogger(getClass());

    private final RefreshTokenRepository repository;

    /**
     * 토큰 저장하기
     * @author 허지영
     * @param data
     * @param refreshToken
     * @param accessToken
     */
    public void saveTokenInfo(String data, String refreshToken, String accessToken) {
        logger.info("Saving token info");

        RefreshToken save = repository.save(new RefreshToken(data, accessToken, refreshToken));
        // find
        System.out.println(save.getId()+"아이디입니다");
        Optional<RefreshToken> result = repository.findById(save.getId());

        // Handling
        // 해당 data 존재시 return.
        if(result.isPresent()) {
            logger.info("save result: "+result.get().toString());
        }else {throw new RuntimeException("Database has no Data");}

    }

    /**
     * 토큰 삭제하기
     * @author 허지영
     * @param accessToken
     */
    public void removeRefreshToken(String accessToken) {
        RefreshToken token = repository.findByAccessToken(accessToken)
                .orElseThrow(IllegalArgumentException::new);

        repository.delete(token);
    }
}