package com.cg.repository;


import com.cg.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    Optional<Cart> findByCreatedBy(String createdBy);

    Boolean existsByCreatedBy(String createdBy);
}
