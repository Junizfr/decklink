import { expect, test } from 'vitest';
import fightRepository from '../../repositories/fightRepository.js';
import { afterAll } from "vitest";
import server from "../../server.js";

afterAll(() => {
  if (server && server.close) {
    server.close();
  }
});


    test('should create a fight', async () => {
        const fight = await fightRepository.create(1, 2);
        expect(fight).toHaveProperty('id');
        expect(fight).toHaveProperty('player1', 1);
        expect(fight).toHaveProperty('player2', 2);
        expect(fight).toHaveProperty('fightAt');
        expect(fight.fightAt).toBeInstanceOf(Date);
    });

    test('should find a fight by ID', async () => {
        const fight = await fightRepository.findById(1);
        expect(fight).toHaveProperty('id', 1);
        expect(fight).toHaveProperty('player1', 1);
        expect(fight).toHaveProperty('player2', 2);
    });

    test('should find all fights', async () => {
        const fights = await fightRepository.findAll();
        expect(fights).toBeInstanceOf(Array);
    });

    test('should find fights by player ID', async () => {
        const fights = await fightRepository.findByPlayerId(1);
        expect(fights).toBeInstanceOf(Array);
        expect(fights.length).toBeGreaterThan(0);
        expect(fights[0]).toHaveProperty('player1', 1);
    });

    test('should update a fight', async () => {
        const updatedFight = await fightRepository.update(1, 2);
        expect(updatedFight).toHaveProperty('id', 1);
        expect(updatedFight).toHaveProperty('winnerId', 2);
    });
